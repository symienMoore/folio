export type Post = {
    "id": string,
    "slug": string,
    "title": string,
    "content": string,
    "bucket": string,
    "created_at": string | Date,
    "modified_at": string | Date,
    "status": "published",
    "published_at": string | Date,
    "modified_by": "66f053d3a6354f2a23284097",
    "created_by": "66f053d3a6354f2a23284097",
    "publish_at": string | Date,
    "thumbnail": string,
    "type": string,
    "metadata": {
        "problem:": "test",
        "solution:": "test",
        "start:": "2024-10-03",
        "end:": "2024-10-10",
        "in_progress:": boolean,
        "img1": {
            "url": string,
            "imgix_url": string
        },
        "img2": string,
        "img3": string,
        "img4": string,
        "img5": string,
        "description:": string
    }
}