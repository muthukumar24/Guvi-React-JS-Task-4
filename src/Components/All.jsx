export default function All(){
    return (
        <div>
            {/* Row for displaying course cards */}
            <div className="row">
                {/* Card for Fullstack Development with MERN Stack */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100 mb-3">
                        <img src="./images/MERN_Image.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Fullstack Development: MERN Stack</h5>
                            <p className="card-text">Learn how to connect ReactJS with NodeJS, Express & MongoDB. Build an entire project from scratch. Refresh the basics about ReactJS, NodeJS, Express and MongoDB</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>

                {/* Card for Fullstack Development with MEAN Stack */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100 mb-3">
                        <img src="./images/MEAN_Image.png" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Fullstack Development: MEAN Stack</h5>
                            <p className="card-text">Build real Angular + NodeJS applications. Understand how Angular works and how it interacts with Backends. Connect any Angular Frontend with a NodeJS Backend</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>

                {/* Card for Cyber Security Course 1 */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100 mb-3">
                        <img src="./images/cybersecurity-1.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">The Complete Cyber Security Course : Hackers Exposed</h5>
                            <p className="card-text">An advanced practical skillset in defeating all online threats - advanced hackers, trackers, malware and all Internet nastiness & government mass surveillance.</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>

                {/* Card for Cyber Security Course 2 */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100 mb-3">
                        <img src="./images/cybersecurity-2.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">2024 Beginners Guide To Cyber Security</h5>
                            <p className="card-text">Cybersecurity Basics: Learn the essential concepts of cybersecurity and the CIA (Confidentiality, Integrity, and Availability) rating.</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>

                {/* Card for Data Science Course */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100 mb-3">
                        <img src="./images/DATA_SCIENCE_Img.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Data Science A-Z: Hands-On Exercise</h5>
                            <p className="card-text">Successfully perform all steps in a complex Data Science project. Create Basic Tableau Visualisations. Perform Data Mining in Tableau.</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>

                {/* Card for Statistics Course */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100 mb-3">
                        <img src="./images/STATISTICS_IMG.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Statistics for Data Science and Business Analysis</h5>
                            <p className="card-text">Understand the fundamentals of statistics. Learn how to work with different types of data. How to plot different types of data.</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>

                {/* Card for Leadership Course */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100">
                        <img src="./images/leadership.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Leadership: Essential for Career Development</h5>
                            <p className="card-text">You will learn the skill sets necessary to lead at all levels and excel in your career.</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>

                {/* Card for Anger Management Course */}
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 py-3">
                    <div className="card h-100">
                        <img src="./images/AngerManagement-img.png" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Anger Management</h5>
                            <p className="card-text">UNLEASHING the Power of Emotions: Mastering Anger Dynamics. DECODE Your Anger: Unlocking the Secrets of Emotional Recognition. STAY Cool Under Pressure: Instant Anger Management Techniques.</p>
                            <a href="#" className="know-more-link">Know More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
