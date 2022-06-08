import Phaser from 'phaser';
class Play extends Phaser.Scene {

    constructor() {
        super('PlayScene');
    }

    preload() {
        this.cursors = this.input.keyboard.createCursorKeys()

        this.load.image('layer1', 'assets/Layer_1.png');
        this.load.image('layer2', 'assets/Layer_2.png');
        this.load.image('layer3', 'assets/Layer_3.png');
        this.load.image('layer4', 'assets/Layer_4.png');
        this.load.image('layer5', 'assets/Layer_4Lights.png');
        this.load.image('layer6', 'assets/Layer_04Lights.png');
        this.load.image('layer7', 'assets/Layer_5.png');
        this.load.image('layer8', 'assets/Layer_6.png');
        this.load.image('layer9', 'assets/Layer_7.png');
        this.load.image('layer10', 'assets/Layer_8.png');
        this.load.image('layer11', 'assets/Layer_9.png');
    }

    create() {
        const width = this.scale.width
        const height = this.scale.height

        this.add.image(.5, .5, 'layer1').setOrigin(0).setScrollFactor(0);
        this.add.image(.5, .5, 'layer2').setOrigin(0).setScrollFactor(.1);;
        this.add.image(.5, .5, 'layer3').setOrigin(0).setScrollFactor(.2);;
        this.add.image(.5, .5, 'layer4').setOrigin(0).setScrollFactor(.3);;
        this.add.image(.5, .5, 'layer5').setOrigin(0).setScrollFactor(.4);;
        this.add.image(.5, .5, 'layer6').setOrigin(0).setScrollFactor(.5);;
        this.add.image(.5, .5, 'layer7').setOrigin(0).setScrollFactor(.6);;
        this.add.image(.5, .5, 'layer8').setOrigin(0).setScrollFactor(.7);;
        this.add.image(.5, .5, 'layer9').setOrigin(0).setScrollFactor(.8);;
        this.add.image(.5, .5, 'layer10').setOrigin(0).setScrollFactor(.9);;
        this.add.image(.5, .5, 'layer11').setOrigin(0).setScrollFactor(1);;

        this.cameras.main.setBounds(0, 0, width * 3, height)
    }



    update() {
        const cam = this.cameras.main
        const speed = 3
        if (this.cursors.left.isDown) {
            //moveLeft
            console.log('left')
            cam.scrollX -= speed
        } else if (this.cursors.right.isDown) {
            cam.scrollX += speed
            console.log('right')
        }
    }
}
export default Play;