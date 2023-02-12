/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */
"use strict";

import * as React from "react";
import { View, StyleSheet } from "react-native";

/**
 * Common implementation for a simple stubbed view. Simply applies the view's styles to the inner
 * View component and renders its children.
 */
const UnimplementedView = (props) => {
  return /*#__PURE__*/ React.createElement(
    View,
    {
      style: [styles.unimplementedView, props.style],
    },
    props.children
  );
};

const styles = StyleSheet.create({
  unimplementedView: __DEV__
    ? {
        alignSelf: "flex-start",
        borderColor: "red",
        borderWidth: 1,
      }
    : {},
});
export default UnimplementedView;
//# sourceMappingURL=UnimplementedView.js.map
