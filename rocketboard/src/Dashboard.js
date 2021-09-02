function Dashboard() {
    return (
    <div>
        <h1 className="Dashboard-Title">MyRocketship Dashboard</h1>
        <div className="Dashboard">

            <div className="HardwareInfo">
                <div className="HardwareInfo-Heading Heading">
                    Hardware Data
                </div>

                <div className="HardwareInfo-Item">
                    <span className="HardwareInfo-Title">Speed:</span> <span className="HardwareInfo-Value">11.2 km/s</span>
                </div>

                <div className="HardwareInfo-Item">
                    <span className="HardwareInfo-Title">Charge:</span> <span id="chargeValue" className="HardwareInfo-Value">53%</span>
                </div>

                <div className="HardwareInfo-Item">
                    <span className="HardwareInfo-Title">MCC Link Strength:</span> <span id="chargeValue" className="HardwareInfo-Value">58%</span>
                </div>
            </div>

            <div className="SoftwareInfo">
                <div className="SoftwareInfo-Heading Heading">Software Data</div>
                    <div className="SoftwareInfo-Item">
                        <span className="SoftwareInfo-Title">OS Version:</span> <span id="chargeValue" className="SoftwareInfo-Value">11.3.2</span>
                    </div>
                    <div className="SoftwareInfo-Item">
                        <span className="SoftwareInfo-Title">RAM Usage:</span> <span id="chargeValue" className="SoftwareInfo-Value">27.3 GB / 64 GB (42%)</span>
                    </div>
                    <div className="SoftwareInfo-Item">
                        <span className="SoftwareInfo-Title">CPU Usage:</span> <span id="chargeValue" className="SoftwareInfo-Value">72%</span>
                    </div>
                    <div className="SoftwareInfo-Item">
                        <span className="SoftwareInfo-Title">Packet Loss:</span> <span id="chargeValue" className="SoftwareInfo-Value">13%</span>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard