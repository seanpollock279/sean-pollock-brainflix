import React from 'react';


class Comments extends React.Component {
    state = { commArr: [
        {
            name: 'Michael Lyons',
            date: '12/18/2018',
            text: 'They Blew the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
        },
        {
            name: 'Gary Wong',
            date: '12/12/2018',
            text: "Every time I see him shred I feel so motivated to get off my couch andhop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
            name: 'Theodore Duncan',
            date: '11/15/2018',
            text: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!"
        }
    ]}
        render() { 
            return (
                this.state.commArr.map((item) => {
                    <div className="comments">
                        <div className="comments__img">Grey circle</div>
                        <h3 className="comments__name">{item.name}</h3>
                        <h3 className="comments__date">{item.date}</h3>
                        <p className="comments__text">{item.text}</p>
                        <hr className="comments__divider"/>
                    </div>
                }      
            )     
        );
    }        
}

export default Comments;