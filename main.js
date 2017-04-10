var mainstate ={
	preload: function() {
		game.load.image('bird', 'assets/bird.png')
	},

	create: function() {
		game.stage.backgroundColor =  '#71c5cf';

		game.physics.startSystem(Phaser.physics.ARCADE);

		this.bird = game.add.sprite(100, 245, 'bird');

		game.physics.arcade.enable(this.bird);

		this.bird.body.gravity.y = 1000;

		var spacekey = game.input.keyboard.addkey(
			Phaser.keyboard.SPACEBAR);
		spaceKey.onDown.add(this.jump, this);
	},

	update: function() {
		if (this.bird.y < 0  || this.bird.y > 490)
			this.restartGame();
		jump: function() {
			this.bird.body.velocity.y = -350
		}

		restartGame: function() {
			game.state.start('main');
		}

	},
};

var game = new Phaser.game(400, 490);

game.state.add ('main' mainstate);

game.state.start('main');