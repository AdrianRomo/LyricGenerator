    useEffect(() => {
        fetchLyricAsync () 
    }, [])
    
    const fetchLyricAsync = async () =>{
        const result = await axios.get("")
        console.log(result)
    }