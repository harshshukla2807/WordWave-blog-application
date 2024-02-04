"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { IoMdCloudUpload } from "react-icons/io";
import toast from 'react-hot-toast';
import Loading from "../Loading";

const storage = getStorage(app);

const successNotify = () => toast.success('Post created successfully');

const WritePage = () => {
  const ReactQuill = typeof window === "object" ? require("react-quill") : () => false;
  const router = useRouter();
  const { status } = useSession();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [loading, setLoading] = useState(false);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/posts/", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "fashion",
      }),
    });

    if (res.ok) {
      const data = await res.json();
      successNotify();
      router.push(`/posts/${data.slug}`);
      setLoading(false);
    } else {
      console.error("Error creating post:", res.statusText);
    }
  };

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    setCatSlug(selectedCategory);
    setIsCategorySelected(!!selectedCategory);
  };

  return (
    <div className={styles.container}>
      {!loading ? (
        <>
          <div className={styles.titleAndCategoryContainer}>
            <input
              type="text"
              placeholder="Title"
              className={styles.input}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className={styles.selectCategoryOuter}>
              <label htmlFor="blogCategory">Category:</label>
              <select
                className={styles.selectCategory}
                name="blogCategory"
                id="blogCategory"
                onChange={handleChange}
              >
                <option value="" selected hidden>
                  Select Category
                </option>
                <option value="fashion">Fashion</option>
                <option value="travel">Travel</option>
                <option value="sports">Sports</option>
                <option value="tech">Tech</option>
                <option value="food">Food</option>
                <option value="trading">Trading</option>
              </select>
            </span>
          </div>

          <div className={styles.editor}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label htmlFor="image" className={styles.uploadImage}>
              <p>Upload Image</p>
              <div className={styles.add}>
                <label>
                  <IoMdCloudUpload className={styles.uploadIcon} />
                </label>
              </div>
            </label>
            <div className={styles.quillAndButtonContainer}>
              <div className={styles.quill}>
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  placeholder="Tell your story..."
                  className={styles.textArea}
                  modules={modules}
                />
              </div>
              <button
                className={styles.publish}
                onClick={handleSubmit}
                disabled={!isCategorySelected}
              >
                Publish
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default WritePage;
