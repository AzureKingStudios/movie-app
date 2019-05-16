import React, {Component} from 'react';

class ScrollTopButton extends Component {

    scrollUp = () => {
        document.documentElement.scrollTop = 0;
    }

    // checkScroll = () => {
    //     if(document.documentElement.scrollTop > 20) {
    //         document.getElementsByClassName('top-scroll-btn')[0].style.display = 'block';
    //     } else {
    //         document.getElementsByClassName('top-scroll-btn')[0].style.display = 'none';
    //     }
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.checkScroll);
    // }
    
    render() {
        
        return (
                <button onClick={this.scrollUp} className='top-scroll-btn'>Top</button>
        )
    }
}

export default ScrollTopButton;