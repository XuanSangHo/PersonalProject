import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story
              image="https://s3-ap-southeast-1.amazonaws.com/misskicklibrary/wp-content/uploads/2017/12/10231700/63b725462a4b36e7717a70e92b7a968c.jpg"
              profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUroyHmVy-3lPUUX5kgHmdgEPBjsytcdExhw&usqp=CAU"
              title="Nguyen Thi Kieu Trinh"
            />
            <Story
              image="https://i.pinimg.com/originals/2c/64/cd/2c64cde7c5c8c134a345b65572482a38.jpg"
              profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK-yNNwgao1qi3biTpeaeOatu4bsXsRMgykg&usqp=CAU"
              title="Huong Giang"
            />
            <Story
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK-yNNwgao1qi3biTpeaeOatu4bsXsRMgykg&usqp=CAU"
              profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRewdJAEaVYnYbUm5_YhWIlPayty-yti-GSkA&usqp=CAU"
              title="Lan Ngoc"
            />
            <Story
              image="https://i.pinimg.com/originals/f4/5b/e6/f45be678b41b940840e752340a16d923.jpg"
              profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjEkyOiKlY5AE7i9AwsMnzM6c9UDTMSgsemg&usqp=CAU"
              title="Lan Quynh"
            />
            <Story
              image="https://afamilycdn.com/2018/6/4/308297707681725667245225859578926510112768n1-1528090732250415705392.jpg"
              profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6TeLYdwBIB4Hll9XKYho5BCpJkXAiWiwx0w&usqp=CAU"
              title="Van Van"
            />
        </div>
    );
}

export default StoryReel;
