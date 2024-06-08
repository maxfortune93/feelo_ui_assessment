import React from 'react';

import SupportContact from './components/SupportContact/SupportContact';
import SalesInfo from './components/SalesInfo/SalesInfo';
import PropTypes from 'prop-types';
import { AccountOverviewContainer, OverviewHeader } from './account-overview-styles';


export const AccountOverview = ({ data }) => {
  
  return (
    <AccountOverviewContainer>
      <OverviewHeader>
        <h1>Account Overview</h1>
        <SupportContact {...data.supportContact} />
      </OverviewHeader>
      <SalesInfo {...data.salesOverview} />
    </AccountOverviewContainer>
  );
}

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      lastUploadDate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AccountOverview;
