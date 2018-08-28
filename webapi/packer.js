var packer = require("./src/scripts/packer.js");

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
    var type = val;
    console.log(type);
    if (type === "all") {
        console.log("updating all");
        packer.updateAll();
    } else if (type === "watch") {
        packer.watch();
    }
});
