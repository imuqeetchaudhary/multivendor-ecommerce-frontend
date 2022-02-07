import './styles.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { carouselArray } from './carousel-array';
import {
	CarouselImgComponent,
	CarouselCaptionComponent,
} from '../../components/CarouselComponent';

const CarouselScreen = () => {
	return (
		<div className='carousel'>
			<Carousel>
				{carouselArray.map((carousal, i) => {
					return (
						<Carousel.Item key={carousal.id}>
							<CarouselImgComponent img={carousal.img} alt={`Slide # ${i + 1}`} />
							<Carousel.Caption>
								<CarouselCaptionComponent
									title={carousal.title}
									detail={carousal.detail}
								/>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CarouselScreen;
