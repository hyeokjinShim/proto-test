// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: test_02.proto

// Protobuf Java Version: 3.25.0
package test_02;

public interface PostOrBuilder extends
    // @@protoc_insertion_point(interface_extends:test_02.Post)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string title = 1;</code>
   * @return The title.
   */
  java.lang.String getTitle();
  /**
   * <code>string title = 1;</code>
   * @return The bytes for title.
   */
  com.google.protobuf.ByteString
      getTitleBytes();

  /**
   * <code>string subTitle = 2;</code>
   * @return The subTitle.
   */
  java.lang.String getSubTitle();
  /**
   * <code>string subTitle = 2;</code>
   * @return The bytes for subTitle.
   */
  com.google.protobuf.ByteString
      getSubTitleBytes();

  /**
   * <code>string description = 3;</code>
   * @return The description.
   */
  java.lang.String getDescription();
  /**
   * <code>string description = 3;</code>
   * @return The bytes for description.
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <code>optional string body = 4;</code>
   * @return Whether the body field is set.
   */
  boolean hasBody();
  /**
   * <code>optional string body = 4;</code>
   * @return The body.
   */
  java.lang.String getBody();
  /**
   * <code>optional string body = 4;</code>
   * @return The bytes for body.
   */
  com.google.protobuf.ByteString
      getBodyBytes();

  /**
   * <code>bool published = 5;</code>
   * @return The published.
   */
  boolean getPublished();
}