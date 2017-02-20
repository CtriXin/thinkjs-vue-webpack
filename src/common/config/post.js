export default {
  json_content_type: ["application/json"],
  max_file_size: 1024 * 1024 * 1024, //1G
  max_fields: 100,
  max_fields_size: 2 * 1024 * 1024, //2M,
  ajax_filename_header: "x-filename",
  file_upload_path: think.RUNTIME_PATH + "/upload",
  file_auto_remove: true
};
