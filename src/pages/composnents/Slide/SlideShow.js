import { useStore } from '~/Store';
import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './slideShow.jpg';
const cx = classNames.bind(styles);

function SlideShow() {
    const [state] = useStore();

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://amis.misa.vn/wp-content/uploads/2022/06/chinh-sach-quang-cao-facebook-2022-thumbnail.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://amis.misa.vn/wp-content/uploads/2022/06/chinh-sach-quang-cao-facebook-2022-thumbnail.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://amis.misa.vn/wp-content/uploads/2022/06/chinh-sach-quang-cao-facebook-2022-thumbnail.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;
