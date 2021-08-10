const Sentry = require("@sentry/node");
const axios = require('axios');
const fs = require('fs');
require('dotenv').config()
const utils = require('moralis-admin-cli/utils')
const { BASE_URI } = require('moralis-admin-cli/config');
const { restartServer } = require('moralis-admin-cli/commands/common');
const prompt = require('prompt-sync')({sigint: true});

/**
 * Configures the events to subscribe to on a smart contract based on the abi file
 */

// Get the path to the abi json file
const abiPath = 'deployments/localhost/ZooKeeper.json';

(async() => {
    try {
        // Get credentials
        const apiKey = utils.getApiKey();
        const apiSecret = utils.getApiSecret();

        // Load servers
        const servers = await utils.getUserServers();
        if (servers.length == 0) {
            console.log("No servers found!");
            return;
        }


        // Get the server to apply the event syncs to
        const server = servers.filter(item => item.updateCloudError === 0 && item.update === 0 && item.enabledEvms && item.name == 'zoo Hardhat')[0]

        console.log('Using server:', server.name)

        // read the abi
        fs.readFile(abiPath, "utf8", async function read(err, data) {

            // Check for errors
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
                return;
            }

            // get the events from the abi
            const contract = JSON.parse(data)
            const abiEvents = contract.abi.filter(item => item.type == "event");
            if (!abiEvents){
                console.log("Could not read ABI");
            }

            // Function for fixing datatypes
            const fixType = (type) => type == "uint" ? "uint256" : type;

            // function for getting the topic
            const getTopic = (item) =>  `${item.name}(${item.inputs.reduce((a,o) => (a.push(fixType(o.type)),a), []).join()})`;

            // Get a list of all the available events to choose from
            const eventNames = abiEvents.reduce((a,o,i) => (a.push(`\n${o.name}`),a), []).join('');

            // Get the current plugins of the server
            const plugins = [];

            // Loop through the selected events
            for (let i = 0; i < abiEvents.length; i++) {
                // Get the current event
                const event = abiEvents[i];

                const description = event.name
                const contractAddress = contract.address
                const tableName = event.name
                const provider = utils.getSelectedServerProvider(JSON.parse(server.enabledEvms))
                // Calculate the topic
                const topic = getTopic(event);

                // Define the new plugin
                const plugin = {
                    id: 1,
                    path: "./evm/events",
                    order: 5,
                    options: {
                        description: description,
                        abi: event,
                        topic: topic,
                        address: contractAddress,
                        tableName: tableName,
                        chainId: provider
                    }
                };
                console.log('Adding plugin for event: ', event.name, contractAddress)

                // Push the plugin to the list
                plugins.push(plugin);
            }

            // Post updated plugins to the api
            console.log("\nPushing contract events to moralis server...")
            await axios.post(`${BASE_URI}/api/cli/updateServerPlugins`, {
                apiKey,
                apiSecret,
                parameters :
                {
                    serverId: server.id,
                    plugins: JSON.stringify(plugins)
                }
            });
            console.log("Successfully saved the contract events!");

            // Restart server to apply sync
            await restartServer(apiKey,apiSecret, server);
            console.log("Events are now subscribed to!");
        });
    } catch (e) {
        console.log("Unexpected error")
        console.log(e)
        Sentry.captureException(e);
    }
})()