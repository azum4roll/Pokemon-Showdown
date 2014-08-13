exports.BattleMovedex = {
	aerialace: {
		inherit: true,
		onTryHit: function (target, pokemon) {
			this.points(pokemon.side, 'AERIAL ACE Kreygasm', 10);
		}
	},
	fissure: {
		inherit: true,
		onHit: function (target, pokemon) {
			this.points(pokemon.side, 'OHKO', 10);
			this.points(target.side, 'Hype', 10);
		}
	},
	guillotine: {
		inherit: true,
		onHit: function (target, pokemon) {
			this.points(pokemon.side, 'OHKO', 10);
			this.points(target.side, 'Hype', 10);
		}
	},
	horndrill: {
		inherit: true,
		onHit: function (target, pokemon) {
			this.points(pokemon.side, 'OHKO', 10);
			this.points(target.side, 'Hype', 10);
		}
	},
	sheercold: {
		inherit: true,
		onHit: function (target, pokemon) {
			this.points(pokemon.side, 'OHKO', 10);
			this.points(target.side, 'Hype', 10);
		}
	},
	healpulse: {
		inherit: true,
		onHit: function (target, source) {
			if (target.hp !== target.maxhp) {
				this.points(source.side, 'A good deed a day brings happiness to stay!', 20);
			}
			if (source.hasAbility('megalauncher')) this.heal(this.modify(target.maxhp, 0.75));
			else this.heal(Math.ceil(target.maxhp * 0.5));
		}
	}
}
