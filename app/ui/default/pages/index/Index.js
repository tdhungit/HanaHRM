import React, { Component } from 'react';

export default class Index extends Component {
    render() {
        return (
            <div className="index-Index bg agile">
                <div className="container">
                    <h1>LEAGUE COMING SOON</h1>

                    <p>To get notified please click on NOTIFY ME</p>

                    <div className="timer_wrap">
                        <div id="counter"> </div>
                    </div>

                    <div className="newsletter">
                        <h2>Subscribe Now</h2>
                        <form action="#" method="post">
                            <input type="email" name="email" size="30" required="" placeholder="Please enter your email" />
                            <input type="submit" value="Notify me" />
                        </form>
                    </div>

                    <div className="copy w3ls">
                        <p>Copyright &copy; 2018 League Coming Soon . All Rights Reserved  | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                        <ul className="agileinfo_social_icons w3l">
                            <li><a href="#" className="w3_agileits_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#" className="agileinfo_google"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#" className="agileits_pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}