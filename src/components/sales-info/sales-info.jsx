import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfo } from '@fortawesome/free-solid-svg-icons';
import { CardHeader, Description, InfoIcon, Percentage, SalesContainer, Stat, StatContainer, Title } from './styles';

const SalesInfo = ({ uploads, linesAttempted, successfulUploads, linesSaved, lastUploadDate }) => (
  <>
    <SalesContainer>
      <CardHeader>
        <Title>
          <FontAwesomeIcon color='#48cae4' icon={faUpload} /> Sales
        </Title>
        <InfoIcon>
          <FontAwesomeIcon color='white' icon={faInfo} />
        </InfoIcon>
      </CardHeader>
      <Description>
        You had <strong> {uploads} </strong> uploads and <strong> {linesAttempted} </strong> lines added.
      </Description>
    </SalesContainer>
    <StatContainer>
      <Stat>
        <Percentage>{successfulUploads}%</Percentage>
        <p>UPLOAD SUCCESS</p>
      </Stat>
      <Stat>
        <Percentage>{linesSaved}%</Percentage>
        <p>LINES SAVED</p>
      </Stat>
    </StatContainer>
  </>
);

SalesInfo.propTypes = {
  uploads: PropTypes.number.isRequired,
  linesAttempted: PropTypes.number.isRequired,
  successfulUploads: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
  lastUploadDate: PropTypes.number.isRequired,
};

export default SalesInfo;