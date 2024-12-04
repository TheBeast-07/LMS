import React from 'react'

function CourseOverView() {
    return (
        <div className="card mb-3 position-relative">
            <div className="card-header d-flex justify-content-between align-items-center">
                <span>Course Overview</span>

            </div>
            <div className="d-flex justify-content-between p-3">
                <div className="left text-center">
                    <img
                        width="99%"
                        src="https://s3-alpha-sig.figma.com/img/6efe/0c5f/14b194373ed676154ad924e945480137?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8ktjho~IEsAPTn14MsRJuNIhFnLHboJ7w0kC536bxNEM11MEDwK8ToHiqWN3BwSUDXy5XC3cIvIKJI8y-VTOmWUFQSB5Mvd2945ofabzqb79eI1B7YR6a0fyzK~FxSOLM~VxAvqtD5bwbI1OKpzVqQZUCPsbvqo3BUfdP6pT0e2fE7fbC2PWBJ9K3Nniz5UY4EGRvB8fjAWbsJAulxGCUXzyBpJQ8OxTVhcdSgxH9fuDRdZlPYhjGE3-lrY-jMbmlLbr1bILTD04qgyUMRPX8JeRm3wm9h5z0jCBL1G5Kb1OSDzQQq2iYCj1syRNvts7Xx62EpasDGUA0E93MqSBw__"
                        alt="Course 1"
                    />
                    <p className="mt-2" style={{ fontSize: '9px' }}><strong>Department of Development</strong></p>
                    <p style={{ fontSize: '10px' }}>Backend / Frontend</p>
                </div>
                <div className="right text-center">
                    <img
                        width="99%"
                        src="https://s3-alpha-sig.figma.com/img/ca21/07f9/58e53088bea38f9c27ddbc5f0039696e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8eC33xLQ2v99hiCMxy0iLK4z-g9n3n1SBBOL6jhMJpo5Z~U2wH5iViPjEgkcTCQ2~G0K1f-b-RXdjly49~FO8Zf63j9O7t3IuF5K4X72PmqumOQ3DGW8IoXcSIfYzuzVBYHvQRKkcEN~ae~rBOpETfzbbnFHWIiA9iSFNvHFOw~ggbi3MlC74XIb2iYh~erpNs0QHKWjD9JJ3n9dqCxw79HhpC8ybX7sOGCEUdnodpJrhzhA-SdFtg7PI3ubPlKf8mBsr2v9dytXZe5uSaVLbRc1mDte4ndkuD3GXOo9gj03F~293KmdUApMgvJwj19aHVJOC6IVlkEc~kBHuj79w__"
                        alt="Course 2"
                    />
                    <p className="mt-2" style={{ fontSize: '10px' }}><strong>Department of Designing</strong></p>
                    <p style={{ fontSize: '9px' }}>User  Interface / User Experience</p>
                </div>
            </div>
            <div className="d-flex justify-content-between p-3 border" style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
    <div className="left text-center">
        <img
            style={{ width: '80%', height: 'auto' }} // Make the image responsive
            src="https://s3-alpha-sig.figma.com/img/dcb2/f491/34a542e07728448d3cbeb37deacc5eaf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=InHG8m3pnarPfFmX5-HJhPj3TDDhMdLq5WnLldCSQCUZU6xO8s9F2sUzzPlS0fNnnzEj3nUqtwI~MZBWYR3Xd3zadlkDVv8bDDy5wsClCpGsgCulis8tE66h5iPDU3maNeBzWX0ZXFeI1Udfmw1~eCRl2IuLBVU5Rf7xPdSy8~9GOJaryhxWPLTXZaEBkT4s325kZ2k3QS91Ez67hRSVWc7qW4djwekZiUnPLh6fl93prQPx~hE4JaloNZ9U5VcHk8aGx2T8TPi8jW-AswrhlWRxw2QaWjPsF5DXhQaDCx5VQkCA8cBKf0ZuhUz0a9j-H~yWnyVrGXE9H6xaAz09oA__"
            alt="Course 1"
        />
        <p className="mt-2" style={{ fontSize: '9px' }}><strong>Department of Development</strong></p>
        <p style={{ fontSize: '10px' }}>Backend / Frontend</p>
    </div>
    <div className="right text-center d-flex flex-column align-items-center">
        <img
            style={{ width: '66%', height: 'auto' }} // Make the image responsive
            src="https://s3-alpha-sig.figma.com/img/8408/ad86/1e4959bd059799bf7815d8ff26fbc384?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5X-IimSS1KX~rt3yVEeIvdX4NEb1V9UtsqIrzR3MovyZzwFHTFEaAxGNONbbp7eGjOaWoVHYfOcuZ-uFH0SRDJff5dEeFqEb43oLhFGYbB8Ingt8lZy-NycquHvqsw3otaeH8Wp3AHWAfvX1OO3u-CfNoqm~Yxs8GWKyS40B5vkQu9-xrVPGBJLvJ3IK1ZEb2gw03~qR1spD-Y7xsbGmGUOh8cdlQBm4LmCQDsFISc5Pti1WGBxydUItUsFFUq-jTENfOlQv2szE2cvAKOw2FArpvHtGKbfqpfMxXy3mV73QkkP56LyKoDw9SaNig4lPXXROsJsasaWnZK5N0vUaQ__"
            alt="Course 2"
        />
        <p className="mt-2" style={{ fontSize: '10px' }}><strong>Department of Designing</strong></p>
        <p style={{ fontSize: '9px' }}>User  Interface / User Experience</p>
    </div>
</div>
        </div>


    )
}

export default CourseOverView