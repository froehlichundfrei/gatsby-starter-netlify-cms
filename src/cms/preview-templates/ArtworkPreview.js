import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const ArtworkPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <>
      moep
      <BlogPostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={tags && tags.toJS()}
        title={entry.getIn(["data", "title"])}
      />
    </>
  );
};

ArtworkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ArtworkPreview;
