export const HTML5ValidationCode = `
function FormExample() {

    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" defaultValue="Mark"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control  required  type="text" placeholder="Last name" defaultValue="Otto"/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }  

  render(<FormExample />);
`.trim();

export const ServerSideRenderingCode = `
const { Formik } = formik;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function FormExample() {
  return (
    <Formik validationSchema={schema} onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} 
                isValid={touched.firstName && !errors.firstName} />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName}/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend"
                  name="username" value={values.username} onChange={handleChange} isInvalid={!!errors.username}/>
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" name="state" value={values.state} onChange={handleChange} isInvalid={!!errors.state} />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check required name="terms" label="Agree to terms and conditions" onChange={handleChange}
              isInvalid={!!errors.terms} feedback={errors.terms} feedbackType="invalid" id="validationFormik0" />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<FormExample />);
`.trim();

export const ValidationTooltipsCode = `
const { Formik } = formik;

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

function FormExample() {
  return (
    <Formik validationSchema={schema} onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative" >
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik102" className="position-relative">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" name="username"
                    value={values.username} onChange={handleChange} isInvalid={!!errors.username} />
                    <Form.Control.Feedback type="invalid" tooltip>
                    {errors.username}
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
                <Form.Control.Feedback type="invalid" tooltip>
                    {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" name="state" value={values.state} onChange={handleChange} isInvalid={!!errors.state}/>
                <Form.Control.Feedback type="invalid" tooltip>
                    {errors.state}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative" >
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control type="file" required name="file" onChange={handleChange} isInvalid={!!errors.file} />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.file}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="position-relative mb-3">
            <Form.Check required name="terms" label="Agree to terms and conditions" onChange={handleChange} isInvalid={!!errors.terms}
              feedback={errors.terms} feedbackType="invalid" id="validationFormik106" feedbackTooltip/>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<FormExample />);
`.trim();

export const InputGroupValidationCode = `
<InputGroup hasValidation>
  <InputGroup.Text>@</InputGroup.Text>
  <Form.Control type="text" required isInvalid />
  <Form.Control.Feedback type="invalid">
    Please choose a username.
  </Form.Control.Feedback>
</InputGroup>
`.trim();

export const ValidationCode = [
	HTML5ValidationCode,
	ServerSideRenderingCode,
	ValidationTooltipsCode,
	InputGroupValidationCode
];

export default ValidationCode;
