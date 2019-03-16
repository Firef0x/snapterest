/**
 * Created by F on 2017/4/28.
 */
import PropTypes from 'prop-types';
import React from 'react';

const formStyle = {
  display: 'inline-block'
};

const CollectionExportForm = ({ htmlMarkup }) => (
  <form
    action="http://codepen.io/pen/define"
    method="POST"
    target="_blank"
    style={formStyle}
  >
    <input
      type="hidden"
      name="data"
      value={htmlMarkup}
    />
    <button
      type="submit"
      className="btn btn-default"
    >
      导出专辑到 Codepen.io
    </button>
  </form>
);

CollectionExportForm.propTypes = {
  htmlMarkup: PropTypes.string.isRequired
};

export default CollectionExportForm;
