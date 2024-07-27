const backend = () => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formField, setFormField] = useState({
    artistName: '',
    title: '',
    cover: ''
  });

  const fixChange = (e) => {
    const { name, value } = e.target;
    setSubmitted((prevData) => ({
      ...prevData,
      [name]: value
    }));
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`ArtistName: ${artist}, Title: ${title}`);
    setSubmitted(true);



    try {
        const response = await fetch('https://your-api-endpoint.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formField)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        console.log('Success:', result);
      } catch (error) {
        console.error('Error:', error);
      }
  };

  <form onSubmit={handleSubmit}>
    <div className="p-2">
      <div className="pb-2">
        <label>Artist Name</label>
      </div>
      <input
        id="artist"
        name="artist"
        type="text"
        className="w-full bg-hoverblue p-3 rounded-lg"
        value={formField.name}
        onChange={fixChange}
        required
      />
    </div>
    <div className="p-2">
      <div className="pb-2">
        <label>Project Title</label>
      </div>
      <input
        id="title"
        name="title"
        type="text"
        className="w-full bg-hoverblue p-3 rounded-lg"
        value={formField.name}
        onChange={fixChange}
        required
      />
    </div>
    <div className="p-2">
      <div className="pb-2">
        <label>Upload Cover Art</label>
      </div>
      <input
        id="cover"
        name="cover"
        type="media"
        className="w-full bg-hoverblue p-3 rounded-lg"
        value={formField.name}
        onChange={fixChange}
        required
      />
    </div>
    <div className="text-center pt-4">
      <button className="bg-mainblue hover:bg-solidblack p-1 text-white text-lg w-1/4 rounded-2xl">
        SUBMIT
      </button>
    </div>
  </form>;
};
