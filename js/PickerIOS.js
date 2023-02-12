/**
 * @flow
 */

import * as React from 'react';
import UnimplementedView from './UnimplementedView';

function PickerIOS(): React.Node {
  return <UnimplementedView />;
}

/**
 * Fallback for non-iOS platforms
 */
PickerIOS.Item = UnimplementedView;

export default PickerIOS;
