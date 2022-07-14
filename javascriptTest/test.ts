filterStatsByType({
    stats,
    type,
    limit,
  }: {
    stats: SrStatsResponse;
    type: string;
    limit: number;
  }): StatsItemFormatted[] {
    const statGroup = stats.lists.find(item => item.type === type);
    if (!statGroup) {
      return [];
    }

    return statGroup.leaders
      .reduce((acc: StatsItemFormatted[], value: SrLeaders) => {
        return [...acc, ...value.players.map(formatSoccerPlayerStat)];
      }, [])
      .slice(0, limit);
  }

  async getLeagueStatistics(slug: string): Promise<SoccerStatisticsResponse> {
    const competitionId = competitionMap.get(slug);
    const currentSeason = await retrieveActualSeason(competitionId);
    if (!competitionId) {
      throw createHttpError(404, 'slug not found');
    }
    const { data: seasonLeaders } = await axios.get(
      `${process.env.SPORTRADAR_SOCCER_BASE_URL}/seasons/${currentSeason.id}/leaders.json?api_key=${process.env.SPORTSRADAR_KEY}`
    );

    const [goals, assists, yellowCards, redCards] = [
      this.filterStatsByType({
        stats: seasonLeaders as SrStatsResponse,
        type: 'goals',
        limit: 5,
      }),
      this.filterStatsByType({
        stats: seasonLeaders as SrStatsResponse,
        type: 'assists',
        limit: 5,
      }),
      this.filterStatsByType({
        stats: seasonLeaders as SrStatsResponse,
        type: 'yellow_cards',
        limit: 5,
      }),
      this.filterStatsByType({
        stats: seasonLeaders,
        type: 'red_cards',
        limit: 5,
      }),
    ];
    return { goals, assists, yellowCards, redCards };
  }
