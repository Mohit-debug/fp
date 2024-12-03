import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './ContentPreview.css';

const ShowResearchDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post, image, uploadedImageName, contentStyles } = location.state || {};

  if (!post) {
    return navigate('/admin/addpost');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2a0530] via-black to-[#2a0530]">
        <div className="container mt-4 text-white">
        
        <h3><strong>Title:</strong> {post.title}</h3>
        
        <p><strong>Description:</strong> {post.description}</p>
        
        <div>
            <strong>Components:</strong>
            <div className="mt-2">
            {post.components.map((component, index) => (
                <span key={index} className="badge bg-primary text-black me-2">
                {component}
                </span>
            ))}
            </div>
        </div>

        <div className="mt-3">
            {image && (
            <div>
                <img
                src={URL.createObjectURL(image)}
                alt="Banner"
                className="img-fluid mt-2"
                style={{ maxWidth: "500px", maxHeight: "400px" }}
                />
            </div>
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
        <Button 
            color="primary" 
            className="mb-3"
            onClick={() => navigate('/admin/addpost')}
        >
            Back to Editor
        </Button>
        </div>
    </div>
  );
};

export default ShowResearchDetails;