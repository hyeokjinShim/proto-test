/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "test_02";

export interface Post {
  title: string;
  subTitle: string;
  description: string;
  body?: string | undefined;
  published: boolean;
}

function createBasePost(): Post {
  return { title: "", subTitle: "", description: "", body: undefined, published: false };
}

export const Post = {
  encode(message: Post, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.subTitle !== "") {
      writer.uint32(18).string(message.subTitle);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.body !== undefined) {
      writer.uint32(34).string(message.body);
    }
    if (message.published === true) {
      writer.uint32(40).bool(message.published);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subTitle = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.body = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.published = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Post {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      subTitle: isSet(object.subTitle) ? globalThis.String(object.subTitle) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      body: isSet(object.body) ? globalThis.String(object.body) : undefined,
      published: isSet(object.published) ? globalThis.Boolean(object.published) : false,
    };
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.subTitle !== "") {
      obj.subTitle = message.subTitle;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.body !== undefined) {
      obj.body = message.body;
    }
    if (message.published === true) {
      obj.published = message.published;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Post>, I>>(base?: I): Post {
    return Post.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Post>, I>>(object: I): Post {
    const message = createBasePost();
    message.title = object.title ?? "";
    message.subTitle = object.subTitle ?? "";
    message.description = object.description ?? "";
    message.body = object.body ?? undefined;
    message.published = object.published ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
