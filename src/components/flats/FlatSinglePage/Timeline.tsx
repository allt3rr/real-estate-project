import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Photo from "/public/assets/adverts/room.png";

const TimelineData = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Timeline = () => {
  return (
    <div className="mt-36">
      <VerticalTimeline lineColor="rgb(86, 87, 89)" animate={false}>
        {TimelineData?.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(211, 215, 222)",
              color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(165, 168, 173)" }}
            iconStyle={{
              background: "rgb(86, 87, 89)",
              color: "#fff",
              width: "20px",
              height: "20px",
              transform: "translate(20px, 20px)",
            }}
            iconClassName={"responsiveFix"}
          >
            <h3 className="font-semibold">{data.title}</h3>
            <h4 className="mt-2 mb-4">{data.description}</h4>
            <Image src={Photo} alt="room_photo" className="rounded-lg" />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
