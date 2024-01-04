const review = [
    {
      name: 'Ngo Dan',
      position: 'Project Manager',
      img: '/images/slider1.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
    },
    {
      name: 'Ngo Dan',
      position: 'Project Manager',
      img: '/images/slider1.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
    },
    {
      name: 'Ngo Dan',
      position: 'Project Manager',
      img: '/images/slider1.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
    },
    {
      name: 'Ngo Dan',
      position: 'Project Manager',
      img: '/images/slider1.jpg',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima molestiae cupiditate laborum numquam nisi, molestias tenetur, nobis eveniet esse modi repellat, provident nihil eum quos dolorum libero. Numquam, quam.'
    },
  ];

export default function ReviewCard(props) {
    return (
        <div className="">
            {review.map((d) =>
                <div className="w-[420px] bg-white rounded-lg p-6 mt-10">
                    <p className=" text-[#4E5566]">"{d.review}"</p>
                    <div className="flex pt-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                            {/* Your avatar image or placeholder */}
                            <img
                                src={d.img}
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="">
                            <p className="text-[18px] font-medium">{d.reviewName}</p>
                            <p className="text-[14px] text-[#6b6b6b]">{d.position}</p>
                        </div>
                    </div>
                </div>
            )} 
        </div>
    );
}
