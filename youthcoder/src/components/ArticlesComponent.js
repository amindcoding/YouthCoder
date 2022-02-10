import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';

class ArticlesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="articels-grid">
          {/* ARTICELS */}
          {/* HTML & CSS */}
          <Grid>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://www.hostpapa.ca/blog/wp-content/uploads/2013/08/pqzvkdbe_HTML5-Present-Past-and-Future.jpg) center / cover',
                }}
              >
                HTML & CSS
              </CardTitle>
              <CardText>Hyper Text MarkUp Language adalah Bahasa markup standar untuk pembuatan halaman website. Dengan kata lain, HTML merupakan wadah / tempat bagi bahasa pemrograman website lainnya.</CardText>
              <CardActions border>
                <Button colored>Tutorial</Button>
                <Button colored>Codepen</Button>
                <Button colored>Pdf</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>

            {/* javascript */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://res.cloudinary.com/teepublic/image/private/s--HGX34F_2--/t_Preview/b_rgb:ffb81c,c_lpad,f_jpg,h_630,q_90,w_1200/v1539273850/production/designs/3302095_0.jpg) center / cover',
                }}
              >
                JavaScript
              </CardTitle>
              <CardText>JavaScript adalah menjadikan website lebih interaktif. Script bahasa pemrograman ini berjalan di browser, bukan server, dan biasanya masuk ke library pihak ketiga untuk menyediakan..</CardText>
              <CardActions border>
                <Button colored>Tutorial</Button>
                <Button colored>CodePen</Button>
                <Button colored>Pdf</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>

            {/* nodejs */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background:
                    'url(https://th.bing.com/th/id/R.1d85f99aa7de75b25c2c24271300e291?rik=p%2bZHL3Eb2Rzdkw&riu=http%3a%2f%2ficon-library.com%2fimages%2fnodejs-icon%2fnodejs-icon-2.jpg&ehk=799J2506lGbLNkp4QPPiePtt1Erf%2bD2nYctBSC0R%2bhw%3d&risl=&pid=ImgRaw&r=0) center / cover',
                }}
              >
                NodeJS
              </CardTitle>
              <CardText>NodeJs adalah sebuah platform yang digunakan untuk mengembangkan aplikasi berbasis web dengan javascript seagai yang dapat dijalankan di windows, mac, dan linux.</CardText>
              <CardActions border>
                <Button colored>Tutorial</Button>
                <Button colored>CodePen</Button>
                <Button colored>Pdf</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="articels-grid">
          {/* VIDEO TUTOR      */}
          {/* Video 1 */}
          <Grid>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://www.quickwebtips.info/wp-content/uploads/2015/04/Free-HTML5-CSS3-Website-Templates.jpg) center / cover',
                }}
              >
                HTML & CSS
              </CardTitle>
              <CardText>Pelajari lebih jelas dengan klik play video</CardText>
              <CardActions border>
                <Button colored>Play Video</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>

            {/* javascript */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/10/What-Is-JavaScript-Featured.jpg) center / cover',
                }}
              >
                Java Script
              </CardTitle>
              <CardText>Pelajari lebih jelas dengan klik play video</CardText>
              <CardActions border>
                <Button colored>Play Video</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>

            {/* react js */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://i.ytimg.com/vi/JPT3bFIwJYA/maxresdefault.jpg) center / cover',
                }}
              >
                React JS
              </CardTitle>
              <CardText>Pelajari lebih jelas dengan klik play video</CardText>
              <CardActions border>
                <Button colored>Play Video</Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="articels-grid">
          {/* eBOOK     */}
          {/* pdf 1 */}
          <Grid>
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://guraru.org/wp-content/uploads/2019/07/Belajar-HTML-DAN-CSS-DASAR.png) center / cover',
                }}
              >
                HTML & CSS
              </CardTitle>
              <CardText>Klik download untuk mengunduh Buku pembelajaran HTML dan CSS</CardText>
              <CardActions border>
                <Button href="https://drive.google.com/file/d/1p6JDm83GGHX6CLKyervJBIf4Rp8PS-w2/view?usp=sharing" colored>
                  Download PDF
                </Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>

            {/* pdf 2 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://recruitment.com/files/pictures-crops/h54sbYxpkP/3000/1500/0/how-to-hire-php-developers) center / cover',
                }}
              >
                PHP
              </CardTitle>
              <CardText>Klik download untuk mengunduh Buku pembelajaran PHP</CardText>
              <CardActions border>
                <Button href="https://drive.google.com/file/d/13eN6B3bK7Bkv-ErZGsClhrvweCNXI4A7/view?usp=sharing" colored>
                  Download PDF
                </Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>

            {/* pdf 3 */}
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
              <CardTitle
                style={{
                  color: '#fff',
                  height: '176px',
                  background: 'url(https://disenowebakus.net/imagenes/articulos/aprender-javascript.jpg) center / cover',
                }}
              >
                Java Script
              </CardTitle>
              <CardText>Klik download untuk mengunduh Buku pembelajaran Java Script</CardText>
              <CardActions border>
                <Button href="https://drive.google.com/file/d/1juqkEknUtPeIhSfNKlAMWTnSsAcxPDcG/view?usp=sharing" colored>
                  Download PDF
                </Button>
              </CardActions>
              <CardMenu style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faShareAlt} />
              </CardMenu>
            </Card>
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Articels</Tab>
          <Tab>Video Tutor</Tab>
          <Tab>eBook</Tab>
        </Tabs>

        <Container id="list">
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default ArticlesComponent;
