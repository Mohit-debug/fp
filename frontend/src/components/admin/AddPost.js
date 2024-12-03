import React, { useState, useRef, useEffect } from "react";
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import ShowResearchDetails from "./ShowResearchDetails";

const AddPost = () => {
    const editorRef = useRef(null);
    const fileInputRef = useRef(null);
    const [document,setDocument] = useState(null);
    

    const [user, setUser] = useState(undefined);
    const [showPostDetails, setShowPostDetails] = useState(false);
  
    const [post, setPost] = useState({
      title: "",
      description: "",
      content: "",
      categoryId: "",
      components: [], // Holds all added tags
    });
    useEffect(()=>{
      console.log(post);
    },[post]);
  
    const [image, setImage] = useState(null);
    const [uploadedImageName, setUploadedImageName] = useState("");
    const [tag, setTag] = useState("");
  
    // Field changed function
    const fieldChanged = (event) => {
      setPost({ ...post, [event.target.name]: event.target.value });
    };
  
    const handleEditorChange = (content, editor) => {
      setPost({ ...post, content });
    };
  
    // Create post function
    const createPost = (event) => {
      event.preventDefault();
    
      if (post.title.trim() === "") {
        toast.error("Post title is required!");
        return;
      }
    
      if (post.content.trim() === "") {
        toast.error("Post content is required!");
        return;
      }
    
      if (post.description.trim() === "") {
        toast.error("Post description is required!");
        return;
      }
    
      if (post.components.length === 0) {
        toast.error("Add at least one component!");
        return;
      }
    
      post["userId"] = user?.id;
    
      // Update the document after ensuring post is complete
      setPost((prevPost) => {
        const updatedPost = { ...prevPost, userId: user?.id };
        setDocument(updatedPost); // Ensure the latest post state is captured here
        return updatedPost;
      });
      
      setShowPostDetails(true);
      toast.success("Post created successfully!");
    };
    
  
    // Handling file change event
    const handleFileChange = (event) => {
      setImage(event.target.files[0]);
      setUploadedImageName(event.target.files[0]?.name || "");
    };
    
    const contentStyles = {
      padding: "15px",
      fontSize: "16px",
      lineHeight: "1.6",
    };
  
    // Add tag to components array
    const addTag = () => {
      if (tag.trim() === "") {
        toast.error("Tag cannot be empty!");
        return;
      }
      if (post.components.includes(tag.trim())) {
        toast.error("Tag already exists!");
        return;
      }
      setPost((prevPost) => ({
        ...prevPost,
        components: [...prevPost.components, tag.trim()],
      }));
      setTag(""); // Clear input field
    };
  

  return (
    <>
    <div className="wrapper">
      <Card className="shadow-sm border-0 mt-2">
        <CardBody>
          <h3>Research Post</h3>
          <Form onSubmit={createPost}>
            <div className="my-3">
              <Label for="title">Post Title: </Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter here"
                className="rounded-0 w-3/5"
                name="title"
                onChange={fieldChanged}
              />
            </div>

            <div className="my-3">
              <Label for="description">Description: </Label>
              <Input
                type="text"
                id="description"
                placeholder="Enter description"
                className="rounded-0 w-3/5"
                name="description"
                onChange={fieldChanged}
              />
            </div>

            <div className="my-3">
              <Label>Components: </Label>
              <div className="d-flex align-items-center">
                <Input
                  type="text"
                  placeholder="Add a component"
                  className="me-2"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
                <Button color="primary" onClick={addTag}>
                  Add
                </Button>
              </div>
              <div className="mt-2">
                <h6>List of Components:</h6>
                {post.components.length > 0 ? (
                  post.components.map((component, index) => (
                    <span
                      key={index}
                      className="badge bg-primary text-black me-2"
                    >
                      {component}
                    </span>
                  ))
                ) : (
                  <p>No components added yet.</p>
                )}
              </div>
            </div>

            <div className="mt-3">
              <Label for="image">Select Post Banner Image: </Label>
              <div className="d-flex align-items-center">
                <Input
                  type="file"
                  className="d-none" // Hide default file input
                  innerRef={fileInputRef} // Attach innerRef for direct DOM access
                  onChange={handleFileChange}
                />
                <Button
                  color="secondary"
                  onClick={() => fileInputRef.current.click()} // Trigger click on input
                >
                  Choose File
                </Button>
              </div>
              {uploadedImageName && (
                <p className="mt-2 text-muted">Uploaded Image: {uploadedImageName}</p>
              )}
            </div>


            <div className="my-3">
              <Label for="content">Post Content</Label>
              <Editor
                apiKey='e4tgzhpeuh98fkd2bvfaffls9mtx1qn0cdkxmx6h9updp0d3'
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={post.content} // Synchronize with state
                init={{
                    plugins: [
                      // Core editing features
                      'anchor', 'advlist', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                      // Your account includes a free trial of TinyMCE premium features
                      // Try the most popular premium features until Dec 13, 2024:
                      'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                      // Early access to document converters
                      'importword', 'exportword', 'exportpdf'
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    content_style: `
                      ul, ol {
                        margin-left: 20px;
                        padding-left: 20px;
                      }
                      li {
                        list-style-type: disc;
                        margin-bottom: 5px;
                      }
                    `,
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                      { value: 'First.Name', title: 'First Name' },
                      { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                  }}
                onEditorChange={handleEditorChange} // Updates state
              />
            </div>


            <Container className="text-center">
              <Button type="submit" className="rounded-0" color="primary">
                Create Post
              </Button>
              <Button
                className="rounded-0 ms-2"
                color="danger"
                onClick={() =>
                  setPost({
                    title: "",
                    description: "",
                    content: "",
                    categoryId: "",
                    components: [],
                  })
                }
              >
                Reset Content
              </Button>
            </Container>

          </Form>
        </CardBody>
      </Card>
    </div>

    {showPostDetails && (
          <ShowResearchDetails 
            post={post}
            image={image}
            uploadedImageName={uploadedImageName}
            contentStyles={contentStyles}
          />
        )}

    </>
  );
};

export default AddPost;
