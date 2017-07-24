module.exports = {
  apps : [{
    name        : "ximera",
    script      : "./app.js",
    instances   : "1",
    exec_mode   : "cluster",
    watch       : false,
    env: {
	"NODE_ENV": "development",
    },
    env_production : {
	"NODE_ENV": "production",
	"DEPLOYMENT": "production",
	"XIMERA_MONGO_DATABASE": "deployed",
	"ROOT_URL": "https://ximera.osu.edu"
    }
  }]
}
