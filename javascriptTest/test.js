var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
filterStatsByType({
    stats: stats,
    type: type,
    limit: limit
}, {
    stats: SrStatsResponse,
    type: string,
    limit: number
});
StatsItemFormatted[];
{
    var statGroup = stats.lists.find(function (item) { return item.type === type; });
    if (!statGroup) {
        return [];
    }
    return statGroup.leaders
        .reduce(function (acc, value) {
        return __spreadArray(__spreadArray([], acc, true), value.players.map(formatSoccerPlayerStat), true);
    }, [])
        .slice(0, limit);
}
async;
getLeagueStatistics(slug, string);
Promise < SoccerStatisticsResponse > {
    "const": competitionId = competitionMap.get(slug),
    "const": currentSeason = await retrieveActualSeason(competitionId),
    "if": function (, competitionId) {
        throw createHttpError(404, 'slug not found');
    },
    "const": (_a = await axios.get("".concat(process.env.SPORTRADAR_SOCCER_BASE_URL, "/seasons/").concat(currentSeason.id, "/leaders.json?api_key=").concat(process.env.SPORTSRADAR_KEY)), seasonLeaders = _a.data, _a),
    "const": (_b = [
        this.filterStatsByType({
            stats: seasonLeaders,
            type: 'goals',
            limit: 5
        }),
        this.filterStatsByType({
            stats: seasonLeaders,
            type: 'assists',
            limit: 5
        }),
        this.filterStatsByType({
            stats: seasonLeaders,
            type: 'yellow_cards',
            limit: 5
        }),
        this.filterStatsByType({
            stats: seasonLeaders,
            type: 'red_cards',
            limit: 5
        }),
    ], goals = _b[0], assists = _b[1], yellowCards = _b[2], redCards = _b[3], _b),
    "return": { goals: goals, assists: assists, yellowCards: yellowCards, redCards: redCards }
};
