import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image from '~/assets/images';

function SlideShow() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={image.slide1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Nghề nghiệp</h3>
                    <p>Đó là một cơ hội tuyệt vời để theo đuổi một nghề nghiệp hay một sự nghiệp.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image.slide1} alt="Second slide" />

                <Carousel.Caption>
                    <h3>Cuộc sống</h3>
                    <p>Không có cuộc sống nào là tự do, đôi khi nhẹ nhàng với một tuyên truyền run rẩy.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image.slide1} alt="Third slide" />

                <Carousel.Caption>
                    <h3>Gia Đình</h3>
                    <p>Đó là một cơ hội tuyệt vời để theo đuổi một nghề nghiệp hay một sự nghiệp.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;
