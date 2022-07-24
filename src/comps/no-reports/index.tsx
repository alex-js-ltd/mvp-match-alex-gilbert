import React, { FC } from 'react';
import { Wrapper, Text, imgUri } from './styles';

const NoReports: FC = () => (
  <Wrapper>
    <Text fontSize={24} lineHeight={28} marginBottom={4} color='#011F4B'>
      No reports
    </Text>
    <Text fontSize={16} lineHeight={19} marginBottom={61} color='#7E8299'>
      Currently you have no data for the reports to be generated. Once you start
      generating traffic through the Balance application the reports will be
      shown.
    </Text>
    <img src={imgUri} alt='Logo' />;
  </Wrapper>
);

export default NoReports;
