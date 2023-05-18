import { useForm } from "react-hook-form";
import { useState, useMemo } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import UploadFromCamera from "./upload-from-camera";

export default function QuiltmeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [useGallery, setUseGallery] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const [photoURL, setPhotoURL] = useState('');

  const onSubmit = (data) => console.log(data, photoURL);

  const uploadContent = useMemo(() => {
    if (useGallery) {
      return <Typography variant="subtitle1" gutterBottom>Upload from gallery</Typography>;
    } else if (useCamera) {
      return <UploadFromCamera setPhotoURL={setPhotoURL} />;
    } else {
      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={() => {
              setUseGallery(true);
            }}
          >
            Use a gallery photo
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setUseCamera(true);
            }}
          >
            Use your camera
          </Button>
        </Stack>
      );
    }
  }, [useGallery, useCamera, setUseGallery, setUseCamera, setPhotoURL]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Typography variant="subtitle1" gutterBottom>
          Upload your photo either by selecting a favorite from your gallery or
          taking one using your camera.
        </Typography>
        {uploadContent}
      </Stack>
      <Stack>
        <label htmlFor="email">Let us know where to send your image.*</label>
        <Input
          {...register("email", {
            required: "Please enter your email address",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]+$/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
          id="email"
          size="md"
          placeholder="email@drupalcon.com"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </Stack>
      <Button type="submit" variant="contained">
        Quilt Me!
      </Button>
    </form>
  );
}
