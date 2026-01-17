import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>

            <TestimonialCard name="Sophia Martinez" description="Absolutely loved the food! Every dish was bursting with flavor."/>
            <TestimonialCard name="Liam Patel" description="The ambiance is so cozy, and my dog loved the outdoor seating too."/>
            <TestimonialCard name="Olivia Kim" description="I've tried Mediterranean food all over, but this place takes the crown!" />
            <TestimonialCard name="Ethan Brooks" description="Friendly staff and amazing dishes. Perfect for a family dinner."/>
            <TestimonialCard name="Ava Thompson" description="After a long day at work, this food was exactly what I needed to recharge."/>
            <TestimonialCard name="Noah White" description="I flew in from across the country, and the meal here was totally worth it!" />
            <TestimonialCard name="Mia Gonzalez" description="The flavors were incredible! Definitely a must-visit for anyone in the city."/>
            <TestimonialCard name="Lucas Wright" description="Had a late-night study session and ended with the best dinner ever here. Highly recommend!" />
             </Carousel>
    )
}