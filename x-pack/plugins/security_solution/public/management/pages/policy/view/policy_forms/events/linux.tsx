/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { memo } from 'react';
import { i18n } from '@kbn/i18n';
import { useDispatch } from 'react-redux';
import { OperatingSystem } from '../../../../../../../common/endpoint/types';
import { policyConfig } from '../../../store/policy_details/selectors';
import { setIn } from '../../../models/policy_details_config';
import { usePolicyDetailsSelector } from '../../policy_hooks';
import { EventFormOption, EventsForm } from '../../components/events_form';

const OPTIONS: ReadonlyArray<EventFormOption<OperatingSystem.LINUX>> = [
  {
    name: i18n.translate('xpack.securitySolution.endpoint.policyDetailsConfig.linux.events.file', {
      defaultMessage: 'File',
    }),
    protectionField: 'file',
  },
  {
    name: i18n.translate(
      'xpack.securitySolution.endpoint.policyDetailsConfig.linux.events.process',
      {
        defaultMessage: 'Process',
      }
    ),
    protectionField: 'process',
  },
  {
    name: i18n.translate(
      'xpack.securitySolution.endpoint.policyDetailsConfig.linux.events.network',
      {
        defaultMessage: 'Network',
      }
    ),
    protectionField: 'network',
  },
];

export const LinuxEvents = memo(() => {
  const policyDetailsConfig = usePolicyDetailsSelector(policyConfig);
  const dispatch = useDispatch();

  return (
    <EventsForm<OperatingSystem.LINUX>
      os={OperatingSystem.LINUX}
      selection={policyDetailsConfig.linux.events}
      options={OPTIONS}
      onValueSelection={(value, selected) =>
        dispatch({
          type: 'userChangedPolicyConfig',
          payload: { policyConfig: setIn(policyDetailsConfig)('linux')('events')(value)(selected) },
        })
      }
    />
  );
});

LinuxEvents.displayName = 'LinuxEvents';
