export const getDataResponse = async(resource, query) => {
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}/${query}`)
    const data = await response.json()
    return data
}

export const postDataResponse = async (resource, query, formData) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}/${query}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
        throw new Error('Error submitting data');
    }
};

