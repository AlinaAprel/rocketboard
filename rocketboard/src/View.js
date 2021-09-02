import front from './assets/front.jpeg'
import back from './assets/back.jpeg'
function View() {
    return (
        <div className="CameraView Background_white">
        <div className="CameraView-Heading Heading">
            Camera View
        </div>

        <div className="CameraView-Content">
            <div className="CameraView-Front">
                <div className="CameraView-Title">Front</div>
                <img className="CameraView-Img" alt="fron view" src={front} />
            </div>

            <div className="CameraView-Rear">
                <div className="CameraView-Title">Rear</div>
                <img className="CameraView-Img" alt="back view" src={back} />
            </div>
        </div>
    </div>
    )
}

export default View;