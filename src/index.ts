import "./styles.css"
import Alpine from 'alpinejs'
import Grid from "./types/Grid"
import Robot from "./types/Robot"

window.Alpine = Alpine

/**
 * ALpine Application initialization
 */
Alpine.data('app', () => {
    return {
        errorMessage: '',
        sequence: '',
        showModal: false,
        currentRow: 0,
        currentColumn: 0,
        grid: new Grid(10, 10),
        clear() {
            this.grid.clear();
            this.currentRow = 0;
            this.currentColumn = 0;
        },
        async moveRobot() {
            let robo = new Robot(1, 'Awesome');
            robo.setPositions(this.currentRow, this.currentColumn);
            this.grid.robot = robo;

            if (!this.grid.hasRobot()) {
                this.errorMessage = "Looks like there is no robot";
                return false;
            }

            let seq = this.sequence.trim().replaceAll(' ', '');
            this.showModal = false;

            for (let i = 0; i < seq.length; i++) {
                await new Promise(r => setTimeout(r, 700));
                try {
                    this.grid.moveRobot(seq[i]);
                } catch (error) {
                    if (error.name !== 'RangeError') {
                        throw error;
                    }
                }
            }
        }
    }
})

Alpine.start()

