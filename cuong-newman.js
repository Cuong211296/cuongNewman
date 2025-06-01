const newman = require("newman");

newman.run({
    collection: require("./AutoGenerateProvinceDistrictWard.postman_collection.json"),
    environment: require('./Goship-CA.postman_environment.json'),
    reporters: ["cli", "htmlextra", "junitfull"],
    reporter: {
        junitfull: {
            export: './newman/results.xml'
        },
        htmlextra: {
            export: './newman/report.html'
        }
    }
});