import React from 'react';
import { Formik, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { Row, Col, Container, Form, FormGroup, FormControl, FormLabel, FormText, Button } from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import * as Yup from "yup";
import axios from 'axios';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: '', region1: '', region2: '' };
    this.state = { dados:[] };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion1(val) {
    this.setState({ region1: val });
  }

  selectRegion2(val) {
    this.setState({ region2: val });
  }

  selectAllData() {
    axios.get("http://localhost:5000/routes/select")
      .then(res => {
        const data = res.data.data;
        alert(JSON.stringify(data));
      })
      .catch(error => {
        alert(error)
      });
  }

  render() {

    const { country, region1, region2 } = this.state;

    return (

      <div>
        <Formik
          initialValues={{
            firstname: '', lastname: '', email: '', phone: '', language: '',
            billingaddress1: '', billingaddress2: '', billingcity: '', billingzip: '',
            shippingaddress1: '', shippingaddress2: '', shippingcity: '', shippingzip: ''
          }}
          validate={values => {
            const errors = {};
            if (!values.firstname) {
              errors.firstname = 'Required';
            } else if (!/^[A-Z]/i.test(values.firstname)) {
              errors.firstname = 'Required';
            } else if (values.firstname.length < 3) {
              errors.firstname = 'Name must contain at least 3 digits';
            } else if (values.firstname.length > 15) {
              errors.firstname = 'Name must be a maximum of 15 digits';
            }

            if (!values.lastname) {
              errors.lastname = 'Required';
            } else if (!/^[A-Z]/i.test(values.lastname)) {
              errors.lastname = 'Required';
            } else if (values.lastname.length < 3) {
              errors.lastname = 'Lastname must contain at least 3 digits';
            } else if (values.lastname.length > 20) {
              errors.lastname = 'Lastname must be a maximum of 20 digits';
            }

            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            if (!values.phone) {
              errors.phone = 'Required';
            } else if (!/^[0-9]/i.test(values.phone)) {
              errors.phone = 'Required';
            } else if (values.phone.length < 8) {
              errors.phone = 'Invalid phone';
            } else if (values.phone.length > 14) {
              errors.phone = 'Invalid phone';
            }

            if (!values.language) {
              errors.language = 'Required';
            }

            if (!values.billingaddress1) {
              errors.billingaddress1 = 'Required';
            } else if (values.billingaddress1.length < 5) {
              errors.billingaddress1 = 'Invalid address';
            } else if (values.billingaddress1.length > 30) {
              errors.billingaddress1 = 'Invalid address';
            }

            if (!values.billingaddress2) {
              errors.billingaddress2 = 'Required';
            } else if (values.billingaddress2.length < 5) {
              errors.billingaddress2 = 'Invalid address';
            } else if (values.billingaddress2.length > 30) {
              errors.billingaddress2 = 'Invalid address';
            }

            if (!values.billingcity) {
              errors.billingcity = 'Required';
            } else if (values.billingcity.length < 3) {
              errors.billingcity = 'Invalid city';
            } else if (values.billingcity.length > 15) {
              errors.billingcity = 'Invalid city';
            }

            if (!values.billingzip) {
              errors.billingzip = 'Required';
            } else if (!/^[0-9]/i.test(values.billingzip)) {
              errors.billingzip = 'Required';
            } else if (values.billingzip.length < 8) {
              errors.billingzip = 'Invalid zip code';
            } else if (values.billingzip.length > 10) {
              errors.billingzip = 'Invalid zip code';
            }

            if (!values.shippingaddress1) {
              errors.shippingaddress1 = 'Required';
            } else if (values.shippingaddress1.length < 5) {
              errors.shippingaddress1 = 'Invalid address';
            } else if (values.shippingaddress1.length > 30) {
              errors.shippingaddress1 = 'Invalid address';
            }

            if (!values.shippingaddress2) {
              errors.shippingaddress2 = 'Required';
            } else if (values.shippingaddress2.length < 5) {
              errors.shippingaddress2 = 'Invalid address';
            } else if (values.shippingaddress2.length > 30) {
              errors.shippingaddress2 = 'Invalid address';
            }

            if (!values.shippingcity) {
              errors.shippingcity = 'Required';
            } else if (values.shippingcity.length < 3) {
              errors.shippingcity = 'Invalid city';
            } else if (values.shippingcity.length > 15) {
              errors.shippingcity = 'Invalid city';
            }

            if (!values.shippingzip) {
              errors.shippingzip = 'Required';
            } else if (!/^[0-9]/i.test(values.shippingzip)) {
              errors.shippingzip = 'Required';
            } else if (values.shippingzip.length < 8) {
              errors.shippingzip = 'Invalid zip code';
            } else if (values.shippingzip.length > 10) {
              errors.shippingzip = 'Invalid zip code';
            }

            if (!values.trackers) {
              errors.trackers = 'Required';
            }

            return errors;
          }}

          onSubmit={(values, { setSubmitting }) => {
                
            setTimeout(() => {

              const baseUrl = "http://localhost:5000/routes/insert";

              const datapost = {
                firstname : values.firstname,
                lastname : values.lastname,
                email : values.email,
                phone : values.phone,
                language : values.language,
                country : this.state.country,
                billingaddress1 : values.billingaddress1,
                billingaddress2 : values.billingaddress2,
                billingcity : values.billingcity,
                billingregion : this.state.region1,
                billingzip : values.billingzip,
                shippingaddress1 : values.shippingaddress1,
                shippingaddress2 : values.shippingaddress2,
                shippingcity : values.shippingcity,
                shippingregion : this.state.region2,
                shippingzip : values.shippingzip,
                trackers : values.trackers
              }

              console.log(datapost);

              axios.post(baseUrl,datapost)
              .then(response=>{
                if (response.data.success===true) {
                  console.log("Dados inseridos no banco de dados.");
                  this.selectAllData();               
                }
                else {
                  console.log("Dados inseridos no banco de dados.");
                }
              }).catch(error=>{
                console.log("Erro  "+error);
              });

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
              <Container>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6">
                      <Form.Row>
                        <Form.Group as={Col} md="12">
                          <h1>Contact Information:</h1>
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <Form.Control placeholder="First Name:"
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstname}
                            isInvalid={!!errors.firstname}
                            isValid={touched.firstname && !errors.firstname} required />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <Form.Control placeholder="Last Name:"
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastname}
                            isInvalid={!!errors.lastname}
                            isValid={touched.lastname && !errors.lastname} required />
                        </Form.Group>

                        <Form.Group as={Col} md="6" isInvalid>
                          <Form.Control placeholder="Email Address:"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            isInvalid={!!errors.email}
                            isValid={touched.email && !errors.email} required />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <Form.Control placeholder="Phone:"
                            type="text"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            isInvalid={!!errors.phone}
                            isValid={touched.phone && !errors.phone} required />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <Form.Control as="select"
                            name="language"
                            value={values.language}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.language}
                            isValid={touched.language && !errors.language} required>
                            <option value="" label="Language:" disabled selected></option>
                            <option value="English" label="English"></option>
                            <option value="Spanish" label="Spanish"></option>
                            <option value="Portuguese" label="Portuguese"></option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <CountryDropdown
                            className="form-control"
                            value={country}
                            onChange={(val) => this.selectCountry(val)}
                            whitelist={['AR', 'CL', 'CO', 'BR', 'MX', 'US', 'UY']}
                            name="country"
                            required />
                        </Form.Group>
                      </Form.Row>

                      <Form.Row>
                        <Form.Group as={Col} md="12">
                          <h1>Billing Address:</h1>
                        </Form.Group>

                        <Form.Group as={Col} md="12">
                          <Form.Control placeholder="Address Line 1:"
                            type="text"
                            name="billingaddress1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.billingaddress1}
                            isInvalid={!!errors.billingaddress1}
                            isValid={touched.billingaddress1 && !errors.billingaddress1} required />
                        </Form.Group>

                        <Form.Group as={Col} md="12">
                          <Form.Control placeholder="Address Line 2:"
                            type="text"
                            name="billingaddress2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.billingaddress2}
                            isInvalid={!!errors.billingaddress2}
                            isValid={touched.billingaddress2 && !errors.billingaddress2} required />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Control placeholder="City:"
                            type="text"
                            name="billingcity"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.billingcity}
                            isInvalid={!!errors.billingcity}
                            isValid={touched.billingcity && !errors.billingcity} required />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <RegionDropdown className="form-control"
                            country={country}
                            value={region1}
                            onChange={(val) => this.selectRegion1(val)} required />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Control placeholder="Zip Code:"
                            type="text"
                            name="billingzip"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.billingzip}
                            isInvalid={!!errors.billingzip}
                            isValid={touched.billingzip && !errors.billingzip} required />
                        </Form.Group>
                      </Form.Row>
                    </Col>
                    <Col lg="6">
                      <Form.Row>
                        <Form.Group as={Col} md="12">
                          <h1>Shipping Address:</h1>
                        </Form.Group>

                        <Form.Group as={Col} md="12">
                          <Form.Control placeholder="Address Line 1:"
                            type="text"
                            name="shippingaddress1"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.shippingaddress1}
                            isInvalid={!!errors.shippingaddress1}
                            isValid={touched.shippingaddress1 && !errors.shippingaddress1} required />
                        </Form.Group>

                        <Form.Group as={Col} md="12">
                          <Form.Control placeholder="Address Line 2:"
                            type="text"
                            name="shippingaddress2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.shippingaddress2}
                            isInvalid={!!errors.shippingaddress2}
                            isValid={touched.shippingaddress2 && !errors.shippingaddress2} required />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Control placeholder="City:"
                            type="text"
                            name="shippingcity"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.shippingcity}
                            isInvalid={!!errors.shippingcity}
                            isValid={touched.shippingcity && !errors.shippingcity} required />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <RegionDropdown className="form-control"
                            country={country}
                            value={region2}
                            onChange={(val) => this.selectRegion2(val)} required />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                          <Form.Control placeholder="Zip Code:"
                            type="text"
                            name="shippingzip"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.shippingzip}
                            isInvalid={!!errors.shippingzip}
                            isValid={touched.shippingzip && !errors.shippingzip} required />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} md="12">
                          <h1>Check the boxes below:</h1>
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <Form.Check
                            name="fuelcut"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="Equipped"
                            label="Does any vehicle need to be equipped with a fuel cut off device?"
                          />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <Form.Check
                            name="trackersinstalled"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="Trackers installed"
                            label="Will any trackers be installed on a bike, truck or marchinery?"
                          />
                        </Form.Group>

                        <Form.Group as={Col} md="6">
                          <Form.Check
                            name="fleetdrivers"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="Needed identify"
                            label="Will you need to identify the fleet drivers?"
                          />
                        </Form.Group>

                        <Form.Group as={Col} md="12">
                          <Form.Control as="select" custom
                            name="trackers"
                            value={values.trackers}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.trackers}
                            isValid={touched.trackers && !errors.trackers} required>
                            <option value='' disabled selected>How many trackers would you like to purchase?</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                            <option value='100'>100</option>
                            <option value='200'>200</option>
                          </Form.Control>
                        </Form.Group>

                      </Form.Row>
                    </Col>
                  </Row>
                  <div className="align-btn">
                    <Button className="btn-form" type="submit" disabled={isSubmitting}>
                      Order Now
                    </Button>
                  </div>
                </Form>
              </Container>
            )}
        </Formik>
      </div>
    );
  }
}

export default Forms;