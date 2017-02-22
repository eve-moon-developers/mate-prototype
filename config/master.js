//This is a js file so environment variables can be supplied along with comments.
const profile = "development"; //Mode can be any folder in the config directory.
module.exports = {
    "profile": profile,
    "general": require("./" + profile + "/general.js"),
    "server": require("./" + profile + "/server.js"),
    "admin": require("./" + profile + "/admin.js"),
    "api": require("./" + profile + "/api.js"),
    "client": require("./" + profile + "/client.js"),
    "redis": require("./" + profile + "/redis.js"),
    "postgres": require("./" + profile + "/postgres.js"),
    "general": require("./" + profile + "/general.js"),
    "misc": require("./" + profile + "/misc.js")
}