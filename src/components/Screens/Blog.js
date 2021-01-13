import React from "react";
import "./Blog.scss";
import blog1 from "../../assets/Blog/mainslide.png";
import blog2 from "../../assets/Blog/3.png";
import {Card} from "react-bootstrap";
import CardDeck from 'react-bootstrap/CardDeck';

class Blog extends React.Component {
  render() {
    return <div>
        <div className="blog__header">
          <img src={blog1} alt="" srcset=""/>
        </div>

        <div className="blog__cards1">
        <h1 class="blogtop" style={{color:"#15878C"}}>Blogs</h1>
        <CardDeck>
              <Card style={{background:"#F2F2F2"}}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title style={{color:"#15878C"}}>Blog Name Here</Card.Title>
                  <Card.Text style={{color:"#5D5D5D"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{background:"#F2F2F2"}}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title style={{color:"#15878C"}}>Blog Name Here</Card.Title>
                  <Card.Text style={{color:"#5D5D5D"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{background:"#F2F2F2"}}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title style={{color:"#15878C"}}>Blog Name Here</Card.Title>
                  <Card.Text style={{color:"#5D5D5D"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </Card.Text>
                </Card.Body>
              </Card>
</CardDeck>
        </div>        
        <div className="blog__cards2">
<CardDeck>
              <Card style={{background:"#F2F2F2"}}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title style={{color:"#15878C"}}>Blog Name Here</Card.Title>
                  <Card.Text style={{color:"#5D5D5D"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{background:"#F2F2F2"}}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title style={{color:"#15878C"}}>Blog Name Here</Card.Title>
                  <Card.Text style={{color:"#5D5D5D"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{background:"#F2F2F2"}}>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                  <Card.Title style={{color:"#15878C"}}>Blog Name Here</Card.Title>
                  <Card.Text style={{color:"#5D5D5D"}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </Card.Text>
                </Card.Body>
              </Card>
</CardDeck>
      </div>
      </div>
  }
}
export default Blog;
