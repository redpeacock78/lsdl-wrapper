import * as path from "path";
import * as child_process from "child_process";

interface from_root {
  (...parts: string[]): string;
}
const from_root: from_root = (...parts: string[]): string =>
  path.join(path.resolve(""), ...parts);
const lsdl_bin: string = from_root(
  "node_modules",
  "line-sticker-downloder",
  "bin",
  "main.js"
);

interface options_type {
  animation?: boolean;
  effect?: boolean;
  gif?: boolean;
  sound?: boolean;
  custom?: boolean;
  manga?: boolean;
}
interface func_parser_args {
  (sticker: string, out_path?: string, options?: options_type): string[];
}

const parser_args: func_parser_args = (
  sticker: string,
  out_path?: string,
  options: options_type = {}
): string[] => {
  const args: string[] = [sticker];
  if (out_path != null && out_path != "") {
    args.push("-d");
    args.push(out_path);
  }
  options.animation ? args.push("-a") : "";
  options.effect ? args.push("-e") : "";
  options.gif ? args.push("-g") : "";
  options.sound ? args.push("-s") : "";
  options.custom ? args.push("-c") : "";
  options.manga ? args.push("-m") : "";
  return args;
};

interface Lsdl {
  (sticker: string, out_path?: string, options?: options_type): Promise<void>;
  async(sticker: string, out_path?: string, options?: options_type): undefined;
}

const lsdl: Lsdl = (
  sticker: string,
  out_path: string,
  options: options_type = {}
): Promise<void> => {
  out_path == "" && out_path == null ? (out_path = null) : "";
  const args: string[] = parser_args(sticker, out_path, options);
  return new Promise((resolve, reject): void => {
    const child: child_process.ChildProcessWithoutNullStreams = child_process.spawn(
      lsdl_bin,
      args
    );
    child.on("error", (err: Error): void => {
      reject(err);
    });
    child.on("exit", (code: number): void => {
      if (code === 0) {
        resolve();
      } else {
        reject("Error:" + code);
      }
    });
  });
};

lsdl.async = (
  sticker: string,
  out_path: string,
  options: options_type = {}
): undefined => {
  out_path == "" && out_path == null ? (out_path = null) : "";
  const args: string[] = parser_args(sticker, out_path, options);
  const { status, error } = child_process.spawnSync(lsdl_bin, args);
  if (error) {
    throw error;
  } else {
    if (status === 0) {
      return;
    } else {
      throw new Error("Subprocess failed: " + status);
    }
  }
};

export = lsdl;
