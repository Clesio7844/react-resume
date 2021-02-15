import React from 'react';
import { Typography } from '@material-ui/core';
import Image from '../../assets/images/pict.jpg';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import resumeData from '../../utils/resumeDate';

import './Profile.css';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}:</span>{' '}
          <a href={link} target='_blank'>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className='profile container_shodow '>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={Image} alt='david' />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Name' text={resumeData.name} />
          <CustomTimelineItem title='Title' text={resumeData.title} />
          <CustomTimelineItem title='Email' text={resumeData.email} />

          {Object.keys(resumeData.socials).map(key => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        <div className='button_container'>
          <CustomButton text={'Download Cv'} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
