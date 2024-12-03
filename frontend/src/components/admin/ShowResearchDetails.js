import React from 'react';

const ShowResearchDetails = ({ post, image, uploadedImageName, contentStyles }) => {
  return (
    <div className="container mt-4">
      <h3><strong>Title:</strong> {post.title}</h3>
      
      <p><strong>Description:</strong> {post.description}</p>
      
      <div>
        <strong>Components:</strong>
        <div className="mt-2">
          {post.components.length > 0 ? (
            post.components.map((component, index) => (
              <span key={index} className="badge bg-primary text-black me-2">
                {component}
              </span>
            ))
          ) : (
            <p>No components added yet.</p>
          )}
        </div>
      </div>

      <div className="mt-3">
        <strong>Banner Image:</strong>
        {image ? (
          <div>
            <p className="text-muted">Uploaded Image: {uploadedImageName}</p>
            <img
              src={URL.createObjectURL(image)}
              alt="Banner"
              className="img-fluid mt-2"
              style={{ maxWidth: "300px", maxHeight: "200px" }}
            />
          </div>
        ) : (
          <p>No banner image uploaded.</p>
        )}
      </div>

      <div className="mt-3">
        <strong>Content:</strong>
        <div 
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={contentStyles}
          className="content-preview"
        />
      </div>
    </div>
  );
};

export default ShowResearchDetails;