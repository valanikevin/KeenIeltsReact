export const AvatarsCode = `   
<Avatar size="xxl" type="image" src={Avatar1} className="rounded-circle" status="online" alt="G K" />
<Avatar size="xl" type="image" src={Avatar1} className="rounded-circle" status="online" alt="G K" />
<Avatar size="lg" type="image" src={Avatar1} className="rounded-circle" status="online" alt="G K" />
<Avatar size="md" type="image" src={Avatar1} className="rounded-circle" status="online" alt="G K" />
<Avatar size="sm" type="image" src={Avatar1} className="rounded-circle" status="online" alt="G K" />
<Avatar size="xs" type="image" src={Avatar1} className="rounded-circle" status="online" alt="G K" />
`.trim();

export const InitialsCode = `
<Avatar size="xxl" type="initial" name="G K" className="rounded-circle" status="online" alt="G K" />
<Avatar size="xl" type="initial" name="G K" className="rounded-circle" status="online" alt="G K" />
<Avatar size="lg" type="initial" name="G K" className="rounded-circle" status="online" alt="G K" />
<Avatar size="md" type="initial" name="G K" className="rounded-circle" status="online" alt="G K" />
<Avatar size="sm" type="initial" name="G K" className="rounded-circle" status="online" alt="G K" />
<Avatar size="xs" type="initial" name="G K" className="rounded-circle" status="online" alt="G K" />
`.trim();

export const StatusIndicator = `
<Avatar size='xxl' src={Avatar1} type="image" status="online" className="rounded-circle"  />
<Avatar size='xl' src={Avatar1} type="image" status="away" className="rounded-circle"  />
<Avatar size='lg' src={Avatar1} type="image" status="offline" className="rounded-circle"  />
<Avatar size='md' src={Avatar1} type="image" status="online" className="rounded-circle"  />
<Avatar size='sm' src={Avatar1} type="image" status="away" className="rounded-circle"  />
<Avatar size='xs' src={Avatar1} type="image" status="online" className="rounded-circle"  />
`.trim();

export const AvatarGroups = `
<div className="d-lg-flex">
    <AvatarGroup className="me-2">
        <Avatar size="lg" src={Avatar1} type="image" className="rounded-circle" />
        <Avatar size="lg" src={Avatar2} type="image" className="rounded-circle" />
        <Avatar size="lg" src={Avatar3} type="image" className="rounded-circle" />
        <Avatar size="lg" src={Avatar4} type="image" className="rounded-circle" />
    </AvatarGroup>
    <AvatarGroup>
        <Avatar size="lg" type="initial" name="G K" variant="primary" className="rounded-circle" />
        <Avatar size="lg" type="initial" name="G K" variant="warning" className="rounded-circle" />
        <Avatar size="lg" type="initial" name="G K" variant="success" className="rounded-circle" />
        <Avatar size="lg" type="initial" name="G K" variant="info" className="rounded-circle" />
    </AvatarGroup>
</div>
`.trim();

export const AvatarGroupsTooltip = `
<div className="d-lg-flex">
    <AvatarGroup className="me-2">
        <Avatar size="lg" src={Avatar1} type="image" className="rounded-circle" name='Jacob Wilson' imgtooltip />
        <Avatar size="lg" src={Avatar2} type="image" className="rounded-circle" name='Dianna Smiley' imgtooltip />
        <Avatar size="lg" src={Avatar3} type="image" className="rounded-circle" name='Kristin Watson' imgtooltip />
        <Avatar size="lg" src={Avatar4} type="image" className="rounded-circle" name='Nia Sikhone' imgtooltip />
    </AvatarGroup>
    <AvatarGroup className="me-2">
        <Avatar size="lg" type="initial" variant="primary" className="rounded-circle" name='Jacob Wilson' imgtooltip />
        <Avatar size="lg" type="initial" variant="warning" className="rounded-circle" name='Dianna Smiley' imgtooltip />
        <Avatar size="lg" type="initial" variant="success" className="rounded-circle" name='Kristin Watson' imgtooltip />
        <Avatar size="lg" type="initial" variant="info" className="rounded-circle" name='Nia Sikhone' imgtooltip />
    </AvatarGroup>
    <AvatarGroup>
        <Avatar size="lg" type="initial" variant="primary" className="rounded-circle" name='Jacob Wilson' imgtooltip soft />
        <Avatar size="lg" type="initial" variant="warning" className="rounded-circle" name='Dianna Smiley' imgtooltip soft />
        <Avatar size="lg" type="initial" variant="success" className="rounded-circle" name='Kristin Watson' imgtooltip soft />
        <Avatar size="lg" type="initial" variant="info" className="rounded-circle" name='Nia Sikhone' imgtooltip soft />
    </AvatarGroup>
</div>
`.trim();

export const AvatarShapes = `
<div className="d-lg-flex">
    <div className="me-4">
        <Avatar  size="lg" src={Avatar1} type="image" className="rounded" /> 
        <Avatar  size="lg" src={Avatar2} type="image" className="rounded-circle"  />                                                  
    </div>
    <div>
        <Avatar size="lg" type="initial" name="G K" variant="primary" className="rounded"  />  
        <Avatar size="lg" type="initial" name="G K" variant="warning" className="rounded-circle"  />                                                  
    </div>
</div> 
`.trim();

export const AvatarRatio = `
<Ratio src={ImgPlaceholder} size="xxl" className="me-1 rounded" /> 
<Ratio src={ImgPlaceholder} size="xl" className="me-1 rounded" /> 
<Ratio src={ImgPlaceholder} size="lg" className="me-1 rounded" /> 
<Ratio src={ImgPlaceholder} size="md" className="me-1 rounded" /> 
<Ratio src={ImgPlaceholder} size="sm" className="me-1 rounded" /> 
<Ratio src={ImgPlaceholder} size="xs" className="me-1 rounded" /> 
`.trim();

export const AvatarDarkColor = `
<Avatar size="md" type="initial" name="G K" variant="primary" className="rounded-circle"  /> 
<Avatar size="md" type="initial" name="G K" variant="secondary" className="rounded-circle"  /> 
<Avatar size="md" type="initial" name="G K" variant="success" className="rounded-circle"  /> 
<Avatar size="md" type="initial" name="G K" variant="danger" className="rounded-circle"  /> 
<Avatar size="md" type="initial" name="G K" variant="warning" className="rounded-circle"  /> 
<Avatar size="md" type="initial" name="G K" variant="info" className="rounded-circle"  /> 
<Avatar size="md" type="initial" name="G K" variant="light" className="rounded-circle text-dark"  /> 
<Avatar size="md" type="initial" name="G K" variant="dark" className="rounded-circle"  />  
`.trim();

export const AvatarSoftColor = `
<Avatar size="md" type="initial" name="G K" soft variant="primary" className="rounded-circle" /> 
<Avatar size="md" type="initial" name="G K" soft variant="secondary" className="rounded-circle" /> 
<Avatar size="md" type="initial" name="G K" soft variant="success" className="rounded-circle" /> 
<Avatar size="md" type="initial" name="G K" soft variant="danger" className="rounded-circle" /> 
<Avatar size="md" type="initial" name="G K" soft variant="warning" className="rounded-circle" /> 
<Avatar size="md" type="initial" name="G K" soft variant="info" className="rounded-circle" /> 
<Avatar size="md" type="initial" name="G K" soft variant="light" className="rounded-circle text-dark"  /> 
<Avatar size="md" type="initial" name="G K" soft variant="dark" className="rounded-circle" /> 
`.trim();
export const AvatarCode = [
	AvatarsCode,
	InitialsCode,
	StatusIndicator,
	AvatarGroups,
	AvatarGroupsTooltip,
	AvatarShapes,
	AvatarRatio,
	AvatarDarkColor,
	AvatarSoftColor
];

export default AvatarCode;
