export const FormGroupsCode = `
<Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
</Form>
`.trim();

export const FormGridCode = `
<Form>
    <Row>
        <Col>
            <Form.Control placeholder="First name" />
        </Col>
        <Col>
            <Form.Control placeholder="Last name" />
        </Col>
    </Row>
</Form>
`.trim();

export const FormGrid2Code = `
<Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
        </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
`.trim();

export const HorizontalFormCode = `
<Form>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
            Email
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
        </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
            Password
        </Form.Label>
        <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
        </Col>
    </Form.Group>
    <fieldset>
        <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
                Radios
            </Form.Label>
            <Col sm={10}>
                <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
                <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
            </Col>
        </Form.Group>
    </fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
        </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
        </Col>
    </Form.Group>
</Form>
`.trim();

export const HorizontalFormLabelSizingCode = `
<Form>
    <Row>
        <Form.Label column="lg" lg={2}>
            Large Text
        </Form.Label>
        <Col>
            <Form.Control size="lg" type="text" placeholder="Large text" />
        </Col>
    </Row>
    <br />
    <Row>
        <Form.Label column lg={2}>
            Normal Text
        </Form.Label>
        <Col>
            <Form.Control type="text" placeholder="Normal text" />
        </Col>
    </Row>
    <br />
    <Row>
        <Form.Label column="sm" lg={2}>
            Small Text
        </Form.Label>
        <Col>
            <Form.Control size="sm" type="text" placeholder="Small text" />
        </Col>
    </Row>
</Form>
`.trim();

export const ColumnSizingCode = `
<Form>
    <Row>
        <Col xs={7}>
            <Form.Control placeholder="City" />
        </Col>
        <Col>
            <Form.Control placeholder="State" />
        </Col>
        <Col>
            <Form.Control placeholder="Zip" />
        </Col>
    </Row>
</Form>
`.trim();
export const AutoSizingCode = `
<Form>
    <Row className="align-items-center">
        <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
            </Form.Label>
            <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Jane Doe"
            />
        </Col>
        <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                Username
            </Form.Label>
            <InputGroup className="mb-2">
                <InputGroup.Text>@</InputGroup.Text>
                <FormControl id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
        </Col>
        <Col xs="auto">
            <Form.Check
                type="checkbox"
                id="autoSizingCheck"
                className="mb-2"
                label="Remember me"
            />
        </Col>
        <Col xs="auto">
            <Button type="submit" className="mb-2">
                Submit
            </Button>
        </Col>
    </Row>
</Form>
`.trim();

export const AutoSizingMoreCode = `
<Form>
    <Row className="align-items-center">
        <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
        </Col>
        <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                Username
            </Form.Label>
            <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
            </InputGroup>
        </Col>
        <Col xs="auto" className="my-1">
            <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
        </Col>
        <Col xs="auto" className="my-1">
            <Button type="submit">Submit</Button>
        </Col>
    </Row>
</Form>
`.trim();

export const LayoutsCode = [
	FormGroupsCode,
	FormGridCode,
	FormGrid2Code,
	HorizontalFormCode,
	HorizontalFormLabelSizingCode,
	ColumnSizingCode,
	AutoSizingCode,
	AutoSizingMoreCode
];

export default LayoutsCode;
